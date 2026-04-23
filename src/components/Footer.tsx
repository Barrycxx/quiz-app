"use client";

import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
    background: linear-gradient(to right, #7b7bef, #9999ff);
    font-family: Calibri, Arial, sans-serif;
    padding: 1rem 4rem;
    box-shadow: 0 -4px 12px rgba(90, 90, 150, 0.2);
    margin-top: auto;
`;

const StyledP = styled.p`
    text-align: center;
    color: #eeeeff;
    font-size: max(0.9vw, 1.2vh);
    margin: 0;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <StyledP>&copy; Chen, Margosian, Oladipupo 2026. All rights reserved.</StyledP>
        </StyledFooter>
    );
}