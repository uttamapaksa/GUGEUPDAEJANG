package com.codesmith.goojangcalling.infra.aws;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.codesmith.goojangcalling.calling.dto.response.FileUploadResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class S3Client {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3 amazonS3;

    public List<FileUploadResponse> uploadFIle(List<MultipartFile> multipartFile) throws Exception{
        List<FileUploadResponse> files = new ArrayList<>();
        for (MultipartFile file : multipartFile) {
            String originalFilename = file.getOriginalFilename();
            String uploadFilename = UUID.randomUUID().toString() + originalFilename;

            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(file.getSize());
            metadata.setContentType(file.getContentType());

            amazonS3.putObject(bucket, uploadFilename, file.getInputStream(), metadata);
            String url = amazonS3.getUrl(bucket, uploadFilename).toString();
            files.add(new FileUploadResponse(url, file.getContentType(), file.getSize()));
        }
        return files;
    }
}