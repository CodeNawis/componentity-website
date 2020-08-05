import { styled } from "frontity";

const UL = ({children, className}) => {
    return (
        <ULCss className={className}>
            {children}
        </ULCss>
    )
}

const ULCss = styled.ul`
  list-style-type: none;
  padding: 0 !important;
  .arrow-right {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    margin-right: 10px;
  }
  li {
    margin-bottom: 10px;
  }
`;
export default UL
