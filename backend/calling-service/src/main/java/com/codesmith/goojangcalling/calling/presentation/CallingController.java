package com.codesmith.goojangcalling.calling.presentation;

import com.codesmith.goojangcalling.calling.dto.response.UploadResponse;
import com.codesmith.goojangcalling.infra.aws.S3Client;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/calling")
public class CallingController {

    private final S3Client s3Client;

    @PostMapping("/upload")
    public ResponseEntity<List<UploadResponse>> upload(@RequestParam("file") List<MultipartFile> multipartFile) throws Exception {
        return ResponseEntity.ok(s3Client.uploadFIle(multipartFile));
    }
}
