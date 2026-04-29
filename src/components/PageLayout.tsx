"use client";

import styled from "styled-components";

const Layout = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem 4rem;
    max-width: 80vw;
    margin: 0 auto;

    @media screen and (width < 1200px) {
        max-width: 1600px;
    }
`;

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return <Layout>{children}</Layout>;
}