export interface AlertProps {
  title?: string;
  description?: string;
  closable?: boolean;
  center?: boolean;
  closeText?: string;
  type?: "success" | "warning" | "info" | "danger";
  showIcon?: boolean;
}
