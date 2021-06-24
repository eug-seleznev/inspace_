
import { observer } from 'mobx-react'
import styled from 'styled-components'




interface ICardProps {
  children: any
  title: string
  gridArea?: string
}
interface ICardStyleProps {
    gridArea?: string
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


`
const CardContainer = styled.div<ICardStyleProps>`
grid-area: ${props => props.gridArea};

`

const Card = observer(({children, title, gridArea}: ICardProps) => {
    return (
        <CardContainer gridArea={gridArea}>   
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