import { PropsWithChildren } from 'react';

export default function BarePageLayout({ children }: PropsWithChildren) {
    return (
        <div>{children}</div>
    );
}