import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { devices } from "../../utils/media";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <ImageWrapper>
        
      </ImageWrapper>
    </PageContainer>
  );
};

export default AuthLayout;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f8f8f8;
`;

const ContentContainer = styled.div`
  flex: 1;
  flex-grow: 1;
  max-width: 588px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 2rem;

  @media ${devices.tablet} {
    & > svg {
      width: 130px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  max-width: 705px;
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;
