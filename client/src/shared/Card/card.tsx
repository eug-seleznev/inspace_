
import { observer } from 'mobx-react'
import styled from 'styled-components'




interface ICardProps {
  children: any
  title: string
  columns?: number
}
interface ICardStyleProps {
    columns?: number
  }


const Aligner = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const CardHeader = styled.div`
    color: ${({theme}) => theme.colors.text};
`

const CardBody = styled.div`
    background-color: ${({theme}) => theme.colors.card};
    border: 1px solid grey;
    border-radius: 10px;
    height: 330px;


`
const CardContainer = styled.div<ICardStyleProps>`
grid-column: span ${props => props.columns};

@media (max-width:770px) {
    grid-column: span 1;
}
`

const Card = observer(({children, title, columns}: ICardProps) => {
    return (
        <CardContainer columns={columns}>   
            <CardHeader>
                {/* header */}
                <p>{title}</p>
            </CardHeader>

            <CardBody>
                {/* body */}
                {children}
            </CardBody>
        </CardContainer>
        )
    })

export default Card