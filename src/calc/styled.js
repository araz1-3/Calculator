import styled from "styled-components";

export const Component = styled.div`
    display:grid;
    justify-content:center;
    align-items:center;
    grid-template-columns: repeat(4,100px);
    grid-template-rows: minmax(100px,auto) repeat(5,90px);
    background-color:#fdfcff;
    width:400px;
    height:600px;
    border-radius:30px;
    margin:30px auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;    
`
export const Main = styled.div`
    display:flex;
    flex-direction:columns;
    grid-column:1/-1;
    justify-content:right;
    word-wrap:break-word;
    word-break:break-all;
    text-align:right;
    padding:10px 30px 10px;
`

export const Previous = styled.div`
    color:#a3a4a8;
    font-size:1rem;
`
export const Current = styled.div`
    color:#0186f3;
    font-size:2.5rem;
    letter-spacing:2px;
    margin-top:20px;
`

export const Button = styled.button`
    margin-left:20px;
    transition:all 0.2s linear;
    margin-right:20px;
    font-size:1.3rem;
    cursor:pointer;
    border:none;
    outline:none;
    height:60px;
    color:#262627;
    border-radius:10px;
    background:#fafbff;
    box-shadow:5px 5px 5px 2px #deeefd, -5px -5px 5px 2px #fff;
    user-select:none;
      &:active{
        font-size:0.9rem;
        background-color:silver;
    }
${({gridSpan})=> gridSpan && `grid-column:span ${gridSpan}`}
${({operation})=> operation && `color:#1e95f5;`}

`