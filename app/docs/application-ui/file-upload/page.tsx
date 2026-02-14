"use client";

import { DocHeader } from "@/components/docs/DocHeader";
import { InstallBlock } from "@/components/docs/InstallBlock";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { FileUpload } from "@/components/ui/FileUpload";
import type { UploadFile } from "@/components/ui/FileUpload";

/* ── Demo files ── */

const progressBarFiles: UploadFile[] = [
    { id: "1", file: new File([], ""), name: "Example dashboard screenshot.jpg", size: 737280, status: "uploading", progress: 50 },
    { id: "2", file: new File([], ""), name: "Tech design requirements_2.pdf", size: 737280, status: "complete", progress: 100 },
    { id: "3", file: new File([], ""), name: "Tech design requirements.pdf", size: 1048576, status: "error", progress: 0, error: "Upload failed" },
];

const progressFillFiles: UploadFile[] = [
    { id: "4", file: new File([], ""), name: "Example dashboard screenshot.jpg", size: 737280, status: "uploading", progress: 50 },
    { id: "5", file: new File([], ""), name: "Tech design requirements_2.pdf", size: 737280, status: "complete", progress: 100 },
    { id: "6", file: new File([], ""), name: "Tech design requirements.pdf", size: 1048576, status: "error", progress: 0, error: "Upload failed, please try again" },
];

/* ── Demo 01: Progress Bar ── */

function ProgressBarDemo() {
    return (
        <div style={{ maxWidth: 480, width: "100%" }}>
            <FileUpload
                hint="SVG, PNG, JPG or GIF (max. 800x400px)"
                files={progressBarFiles}
                progressVariant="bar"
                onRetry={() => {}}
            />
        </div>
    );
}

const progressBarCode = `import { FileUpload } from "@/components/ui/FileUpload";
import type { UploadFile } from "@/components/ui/FileUpload";

const files: UploadFile[] = [
  { id: "1", file, name: "screenshot.jpg", size: 737280, status: "uploading", progress: 50 },
  { id: "2", file, name: "requirements.pdf", size: 737280, status: "complete", progress: 100 },
  { id: "3", file, name: "design.pdf", size: 1048576, status: "error", progress: 0 },
];

<FileUpload
  hint="SVG, PNG, JPG or GIF (max. 800x400px)"
  files={files}
  progressVariant="bar"
  onRetry={(id) => console.log("Retry", id)}
/>`;

/* ── Demo 02: Progress Fill ── */

function ProgressFillDemo() {
    return (
        <div style={{ maxWidth: 480, width: "100%" }}>
            <FileUpload
                hint="SVG, PNG, JPG or GIF (max. 800x400px)"
                files={progressFillFiles}
                progressVariant="fill"
                onRetry={() => {}}
            />
        </div>
    );
}

const progressFillCode = `import { FileUpload } from "@/components/ui/FileUpload";

<FileUpload
  hint="SVG, PNG, JPG or GIF (max. 800x400px)"
  files={files}
  progressVariant="fill"
  onRetry={(id) => console.log("Retry", id)}
/>`;

/* ── Demo 03: Disabled ── */

function DisabledDemo() {
    return (
        <div style={{ maxWidth: 480, width: "100%" }}>
            <FileUpload
                hint="SVG, PNG, JPG or GIF (max. 800x400px)"
                disabled
            />
        </div>
    );
}

const disabledCode = `import { FileUpload } from "@/components/ui/FileUpload";

<FileUpload
  hint="SVG, PNG, JPG or GIF (max. 800x400px)"
  disabled
/>`;

/* ── Demo 04: Accept Image Only ── */

function AcceptImageDemo() {
    return (
        <div style={{ maxWidth: 480, width: "100%" }}>
            <FileUpload
                accept="image/png,image/jpeg"
                hint="Please upload PNG or JPEG images only."
            />
        </div>
    );
}

const acceptImageCode = `import { FileUpload } from "@/components/ui/FileUpload";

<FileUpload
  accept="image/png,image/jpeg"
  hint="Please upload PNG or JPEG images only."
/>`;

/* ── Demo 05: Max Size Limit ── */

function MaxSizeDemo() {
    return (
        <div style={{ maxWidth: 480, width: "100%" }}>
            <FileUpload
                maxSize={1048576}
                hint="Upload files to add to this project (max. 1 MB)."
            />
        </div>
    );
}

const maxSizeCode = `import { FileUpload } from "@/components/ui/FileUpload";

<FileUpload
  maxSize={1048576}
  hint="Upload files to add to this project (max. 1 MB)."
/>`;

/* ── Demo 06: Default (uncontrolled) ── */

function DefaultDemo() {
    return (
        <div style={{ maxWidth: 480, width: "100%" }}>
            <FileUpload
                hint="SVG, PNG, JPG or GIF (max. 800x400px)"
                multiple
            />
        </div>
    );
}

const defaultCode = `import { FileUpload } from "@/components/ui/FileUpload";

<FileUpload
  hint="SVG, PNG, JPG or GIF (max. 800x400px)"
  multiple
/>`;

/* ── Props ── */

const fileUploadProps = [
    { name: "accept", type: "string", description: 'Accepted file types (e.g. "image/*,.pdf"). Maps to the native input accept attribute.' },
    { name: "maxSize", type: "number", description: "Maximum file size in bytes. Files exceeding this limit will be rejected with an error." },
    { name: "multiple", type: "boolean", default: "true", description: "Allow selecting multiple files at once." },
    { name: "disabled", type: "boolean", default: "false", description: "Disable the drop zone and file input." },
    { name: "hint", type: "string", description: "Hint text displayed below the drop zone icon." },
    { name: "progressVariant", type: '"bar" | "fill"', default: '"bar"', description: "How file upload progress is displayed. Bar shows a track below file info; fill uses a background fill on the file item." },
    { name: "files", type: "UploadFile[]", description: "Controlled file list. When provided, the component does not manage its own file state." },
    { name: "onFilesAdded", type: "(files: File[]) => void", description: "Callback when valid files are added via drop or browse." },
    { name: "onFileRemove", type: "(id: string) => void", description: "Callback when the remove button is clicked on a file." },
    { name: "onRetry", type: "(id: string) => void", description: "Callback when the retry button is clicked on a failed file." },
    { name: "className", type: "string", description: "Additional CSS class for the root element." },
];

const uploadFileProps = [
    { name: "id", type: "string", description: "Unique identifier for the file." },
    { name: "file", type: "File", description: "The native File object." },
    { name: "name", type: "string", description: "Display name of the file." },
    { name: "size", type: "number", description: "File size in bytes." },
    { name: "status", type: '"idle" | "uploading" | "complete" | "error"', description: "Current upload status." },
    { name: "progress", type: "number (0–100)", description: "Upload progress percentage." },
    { name: "error", type: "string", description: "Error message displayed when status is error." },
];

/* ── Page ── */

export default function FileUploadPage() {
    return (
        <div>
            <DocHeader
                title="File Upload"
                description="Drag-and-drop file upload with progress tracking, validation, and multiple display variants. Supports file type filtering, size limits, and controlled/uncontrolled modes."
                breadcrumbs={[
                    { label: "Docs", href: "/docs/getting-started" },
                    { label: "Application UI", href: "/docs/application-ui/card" },
                    { label: "File Upload" },
                ]}
            />

            <InstallBlock slug="file-upload" components={["FileUpload"]} />

            <ComponentPreview
                title="Default"
                description="Uncontrolled file upload with drag-and-drop zone. Files are managed internally. Drop files or click to browse."
                code={defaultCode}
            >
                <DefaultDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Progress Bar"
                description="File list with progress bars showing uploading, complete, and failed states. Each file shows its name, size, status, and a progress track."
                code={progressBarCode}
            >
                <ProgressBarDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Progress Fill"
                description="Alternative progress display where the file item background fills with color to indicate progress. Failed files show an error message with a retry button."
                code={progressFillCode}
            >
                <ProgressFillDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Disabled"
                description="Disabled state prevents interaction with the drop zone."
                code={disabledCode}
            >
                <DisabledDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Accept Image Only"
                description="Restrict accepted file types using the accept prop. Invalid files are rejected with an error message."
                code={acceptImageCode}
            >
                <AcceptImageDemo />
            </ComponentPreview>

            <ComponentPreview
                title="Max Size Limit"
                description="Set a maximum file size in bytes. Files exceeding the limit are rejected with a descriptive error."
                code={maxSizeCode}
            >
                <MaxSizeDemo />
            </ComponentPreview>

            <PropsTable title="FileUpload" props={fileUploadProps} />
            <PropsTable title="UploadFile" props={uploadFileProps} />
        </div>
    );
}
