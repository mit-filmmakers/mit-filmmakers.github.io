import { AriaAttributes } from "react";

declare module 'react' {
    interface HTMLAttribute<T> extends AriaAttributes, DOMAttributes<T> {
        border?: string;
    }
}