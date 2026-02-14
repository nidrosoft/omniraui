"use client";

import React, { useState, useRef, useCallback } from "react";
import { DocumentUpload, Trash, CloseCircle, Document, TickCircle, InfoCircle } from "iconsax-react";
import { cn } from "@/lib/cn";
import s from "./FileUpload.module.css";

/* ══════════════════════════════════════════════
   Types
   ══════════════════════════════════════════════ */

export type FileStatus = "idle" | "uploading" | "complete" | "error";
export type FileUploadProgressVariant = "bar" | "fill";

export interface UploadFile {
    id: string;
    file: File;
    name: string;
    size: number;
    status: FileStatus;
    progress: number;
    error?: string;
}

export interface FileUploadProps {
    /** Accepted file types (e.g. "image/*,.pdf") */
    accept?: string;
    /** Max file size in bytes */
    maxSize?: number;
    /** Allow multiple files */
    multiple?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Hint text below the drop zone */
    hint?: string;
    /** Progress display variant */
    progressVariant?: FileUploadProgressVariant;
    /** Controlled file list */
    files?: UploadFile[];
    /** Callback when files are added */
    onFilesAdded?: (files: File[]) => void;
    /** Callback when a file is removed */
    onFileRemove?: (id: string) => void;
    /** Callback when retry is clicked on a failed file */
    onRetry?: (id: string) => void;
    /** Additional CSS class */
    className?: string;
}

/* ══════════════════════════════════════════════
   Helpers
   ══════════════════════════════════════════════ */

function formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

let fileIdCounter = 0;
function generateFileId(): string {
    return `file-${++fileIdCounter}-${Date.now()}`;
}

function getFileExtension(name: string): string {
    const parts = name.split(".");
    return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
}

/* ══════════════════════════════════════════════
   FileItem — Progress Bar variant
   ══════════════════════════════════════════════ */

interface FileItemProps {
    file: UploadFile;
    onRemove?: (id: string) => void;
    onRetry?: (id: string) => void;
}

function FileItemBar({ file, onRemove, onRetry }: FileItemProps) {
    const isError = file.status === "error";
    const isComplete = file.status === "complete";
    const isUploading = file.status === "uploading";

    return (
        <div className={cn(s.fileItem, isError && s.fileItemError)}>
            <div className={cn(s.fileIcon, isError && s.fileIconError)}>
                {isError ? (
                    <InfoCircle size={18} variant="Bulk" color="currentColor" />
                ) : (
                    <Document size={18} variant="Bulk" color="currentColor" />
                )}
            </div>
            <div className={s.fileInfo}>
                <div className={s.fileNameRow}>
                    <span className={s.fileName}>{file.name}</span>
                    {onRemove && (
                        <button
                            type="button"
                            className={s.removeBtn}
                            onClick={() => onRemove(file.id)}
                            aria-label="Remove file"
                        >
                            <Trash size={14} variant="Linear" color="currentColor" />
                        </button>
                    )}
                </div>
                <span className={s.fileSize}>{formatFileSize(file.size)}</span>
                <div className={s.statusRow}>
                    {isUploading && (
                        <>
                            <span className={cn(s.statusText, s.statusUploading)}>Uploading...</span>
                            <span className={s.statusPercent}>{Math.round(file.progress)}%</span>
                        </>
                    )}
                    {isComplete && (
                        <>
                            <TickCircle size={14} variant="Bulk" color="var(--color-success)" />
                            <span className={cn(s.statusText, s.statusComplete)}>Complete</span>
                            <span className={s.statusPercent}>100%</span>
                        </>
                    )}
                    {isError && (
                        <>
                            <span className={cn(s.statusText, s.statusFailed)}>Failed</span>
                            {onRetry && (
                                <button type="button" className={s.retryBtn} onClick={() => onRetry(file.id)}>
                                    Try again
                                </button>
                            )}
                        </>
                    )}
                </div>
                {(isUploading || isComplete) && (
                    <div className={s.progressTrack}>
                        <div
                            className={cn(
                                s.progressFill,
                                isComplete && s.progressFillComplete,
                            )}
                            style={{ width: `${file.progress}%` }}
                        />
                    </div>
                )}
                {isError && (
                    <div className={s.progressTrack}>
                        <div className={cn(s.progressFill, s.progressFillError)} />
                    </div>
                )}
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════
   FileItem — Progress Fill variant
   ══════════════════════════════════════════════ */

function FileItemFill({ file, onRemove, onRetry }: FileItemProps) {
    const isError = file.status === "error";
    const isComplete = file.status === "complete";
    const isUploading = file.status === "uploading";

    return (
        <div className={cn(s.fileItem, s.fileItemFill, isError && s.fileItemError)}>
            {/* Background fill */}
            {!isError && (
                <div
                    className={cn(
                        s.fileItemFillBg,
                        isComplete && s.fileItemFillBgComplete,
                    )}
                    style={{ width: `${file.progress}%` }}
                />
            )}
            {isError && <div className={cn(s.fileItemFillBg, s.fileItemFillBgError)} />}

            <div className={s.fileItemFillContent}>
                <div className={cn(s.fileIcon, isError && s.fileIconError)}>
                    {isError ? (
                        <InfoCircle size={18} variant="Bulk" color="currentColor" />
                    ) : (
                        <Document size={18} variant="Bulk" color="currentColor" />
                    )}
                </div>
                <div className={s.fileInfo}>
                    <div className={s.fileNameRow}>
                        <span className={s.fileName}>{file.name}</span>
                        {onRemove && (
                            <button
                                type="button"
                                className={s.removeBtn}
                                onClick={() => onRemove(file.id)}
                                aria-label="Remove file"
                            >
                                <CloseCircle size={16} variant="Linear" color="currentColor" />
                            </button>
                        )}
                    </div>
                    {isError ? (
                        <div className={s.statusRow}>
                            <span className={cn(s.statusText, s.statusFailed)}>
                                {file.error || "Upload failed, please try again"}
                            </span>
                            {onRetry && (
                                <button type="button" className={s.retryBtn} onClick={() => onRetry(file.id)}>
                                    Try again
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className={s.statusRow}>
                            <span className={s.fileSize}>{formatFileSize(file.size)}</span>
                            {isUploading && <span className={s.statusPercent}>{Math.round(file.progress)}%</span>}
                            {isComplete && (
                                <>
                                    <TickCircle size={14} variant="Bulk" color="var(--color-success)" />
                                    <span className={s.statusPercent}>100%</span>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════════
   FileUpload (main)
   ══════════════════════════════════════════════ */

export function FileUpload({
    accept,
    maxSize,
    multiple = true,
    disabled = false,
    hint,
    progressVariant = "bar",
    files: controlledFiles,
    onFilesAdded,
    onFileRemove,
    onRetry,
    className,
}: FileUploadProps) {
    const [internalFiles, setInternalFiles] = useState<UploadFile[]>([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const files = controlledFiles ?? internalFiles;

    const validateFile = useCallback(
        (file: File): string | null => {
            if (maxSize && file.size > maxSize) {
                return `File "${file.name}" exceeds the ${formatFileSize(maxSize)} size limit.`;
            }
            if (accept) {
                const acceptedTypes = accept.split(",").map((t) => t.trim());
                const ext = `.${getFileExtension(file.name)}`;
                const mimeType = file.type;
                const isAccepted = acceptedTypes.some((t) => {
                    if (t.startsWith(".")) return ext === t.toLowerCase();
                    if (t.endsWith("/*")) return mimeType.startsWith(t.replace("/*", "/"));
                    return mimeType === t;
                });
                if (!isAccepted) {
                    return `File "${file.name}" is not an accepted file type.`;
                }
            }
            return null;
        },
        [accept, maxSize],
    );

    const handleFiles = useCallback(
        (fileList: FileList | File[]) => {
            const newFiles = Array.from(fileList);
            const validFiles: File[] = [];
            const errors: string[] = [];

            for (const f of newFiles) {
                const err = validateFile(f);
                if (err) {
                    errors.push(err);
                } else {
                    validFiles.push(f);
                }
            }

            if (errors.length > 0) {
                setError(errors[0]);
            } else {
                setError(null);
            }

            if (validFiles.length > 0) {
                if (onFilesAdded) {
                    onFilesAdded(validFiles);
                } else {
                    const uploadFiles: UploadFile[] = validFiles.map((f) => ({
                        id: generateFileId(),
                        file: f,
                        name: f.name,
                        size: f.size,
                        status: "idle" as FileStatus,
                        progress: 0,
                    }));
                    setInternalFiles((prev) => [...prev, ...uploadFiles]);
                }
            }
        },
        [validateFile, onFilesAdded],
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragOver(false);
            if (disabled) return;
            if (e.dataTransfer.files.length > 0) {
                handleFiles(e.dataTransfer.files);
            }
        },
        [disabled, handleFiles],
    );

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length > 0) {
                handleFiles(e.target.files);
            }
            if (inputRef.current) inputRef.current.value = "";
        },
        [handleFiles],
    );

    const handleRemove = useCallback(
        (id: string) => {
            if (onFileRemove) {
                onFileRemove(id);
            } else {
                setInternalFiles((prev) => prev.filter((f) => f.id !== id));
            }
        },
        [onFileRemove],
    );

    const FileItemComponent = progressVariant === "fill" ? FileItemFill : FileItemBar;

    return (
        <div className={className}>
            {/* Drop Zone */}
            <div
                className={cn(
                    s.dropZone,
                    isDragOver && s.dropZoneActive,
                    error && s.dropZoneError,
                    disabled && s.dropZoneDisabled,
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    ref={inputRef}
                    type="file"
                    className={s.dropZoneInput}
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                    onChange={handleInputChange}
                    tabIndex={-1}
                />
                <div className={s.dropIcon}>
                    <DocumentUpload size={20} variant="Bulk" color="currentColor" />
                </div>
                <p className={s.dropText}>
                    <span className={s.dropTextAction}>Click to upload</span> or drag and drop
                </p>
                {hint && !error && <p className={s.dropHint}>{hint}</p>}
                {error && <p className={s.dropError}>{error}</p>}
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className={s.fileList}>
                    {files.map((f) => (
                        <FileItemComponent
                            key={f.id}
                            file={f}
                            onRemove={handleRemove}
                            onRetry={onRetry}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
