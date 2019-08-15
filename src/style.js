import styled from 'styled-components';

//criando componente title como h1
export const Title = styled.h1`
    color: #f00;
    background: #000;
    /*estilizando componente especifico*/
    font-size: ${props => `${props.fontSize}px`};    
    span{
        font-size:12px;
    }
`;
export const TitleSmall = styled(Title)`
/**estiliza componetes com o mesmo padrao do
 componete anterior com algumas alterações*/
    color:#00F;
    font-size: 16px;
`;
