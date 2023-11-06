package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.application.CallingService;
import com.codesmith.goojangcalling.calling.application.MemberTagService;
import com.codesmith.goojangcalling.calling.dto.request.AddMemberTagRequest;
import com.codesmith.goojangcalling.calling.dto.request.CallingCreateRequest;
import com.codesmith.goojangcalling.calling.dto.request.OccurrenceCreateRequest;
import com.codesmith.goojangcalling.calling.dto.response.OccurrenceCreateResponse;
import com.codesmith.goojangcalling.calling.dto.response.CallingStatusResponse;
import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;
import com.codesmith.goojangcalling.global.passport.MemberInfo;
import com.codesmith.goojangcalling.global.passport.presentation.AuthMember;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/calling")
public class CallingController {

    private final MemberTagService memberTagService;
    private final CallingService callingService;

    @PostMapping("/upload")
    public ResponseEntity<List<FileUploadResponse>> upload(@RequestParam("files") List<MultipartFile> multipartFile) {
        return ResponseEntity.ok(callingService.fileUpload(multipartFile));
    }

    @PostMapping
    public ResponseEntity<OccurrenceCreateResponse> addOccurrence(@AuthMember MemberInfo memberInfo, @RequestBody OccurrenceCreateRequest occurrenceCreateRequest) {
        return ResponseEntity.ok(callingService.addOccurrence(memberInfo.getId(), occurrenceCreateRequest));
    }

    @PostMapping("/hospital")
    public ResponseEntity<Void> addCallingAndSendToHospital(@AuthMember MemberInfo memberInfo, @RequestBody CallingCreateRequest callingCreateRequest) {
        List<CallingStatusResponse> callingStatusResponses = callingService.addCalling(memberInfo.getId(), callingCreateRequest);
        callingService.createCallingMessage(callingStatusResponses, callingCreateRequest.getOccurrenceId());
        return ResponseEntity.ok().build();
    }

    // TODO : 추 후에 이송 반환으로 수정
    @PutMapping("/fix/{callingId}")
    public ResponseEntity<Void> fixCallingAndSendToHospital(@AuthMember MemberInfo memberInfo, @PathVariable Long callingId) {
        callingService.createTransfer(memberInfo.getId(), callingId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/tag")
    public ResponseEntity<List<MemberTagResponse>> getTagListByMemberList(@AuthMember MemberInfo memberInfo) {
        return ResponseEntity.ok(memberTagService.getMemberTagList(memberInfo.getId()));
    }

    @PostMapping("/tag")
    public ResponseEntity<MemberTagResponse> addMemberTag(@AuthMember MemberInfo memberInfo, @RequestBody AddMemberTagRequest addMemberTagRequest) {
        return ResponseEntity.ok(memberTagService.addMemberTag(memberInfo.getId(), addMemberTagRequest.getTagName()));
    }

    @DeleteMapping("/tag/{tagId}")
    public ResponseEntity<Void> deleteMemberTag(@AuthMember MemberInfo memberInfo, @PathVariable Long tagId) {
        memberTagService.deleteMemberTag(memberInfo.getId(), tagId);
        return ResponseEntity.ok().build();
    }
}
