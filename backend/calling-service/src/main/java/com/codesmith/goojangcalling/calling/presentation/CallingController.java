package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.application.MemberTagService;
import com.codesmith.goojangcalling.calling.dto.request.AddMemberTagRequest;
import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import com.codesmith.goojangcalling.calling.dto.response.MemberTagResponse;
import com.codesmith.goojangcalling.infra.aws.S3Client;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/calling")
public class CallingController {

    private final S3Client s3Client;
    private final MemberTagService memberTagService;

    //TODO : 임시 멤버 삭제하기
    private final Long memberId = 521L; // 멤버 받기 전 임시

    @PostMapping("/upload")
    public ResponseEntity<List<FileUploadResponse>> upload(@RequestParam("files") List<MultipartFile> multipartFile) throws Exception {
        return ResponseEntity.ok(s3Client.uploadFIle(multipartFile));
    }

    @GetMapping("/tag")
    public ResponseEntity<List<MemberTagResponse>> getTagListByMemberList() {
        return ResponseEntity.ok(memberTagService.getMemberTagList(memberId));
    }

    @PostMapping("/tag")
    public ResponseEntity<MemberTagResponse> addMemberTag(@RequestBody AddMemberTagRequest addMemberTagRequest) {
        return ResponseEntity.ok(memberTagService.addMemberTag(memberId, addMemberTagRequest.getTagName()));
    }

    @DeleteMapping("/tag/{tagId}")
    public ResponseEntity<Void> deleteMemberTag(@PathVariable Long tagId) {
        memberTagService.deleteMemberTag(memberId, tagId);
        return ResponseEntity.ok().build();
    }
}
