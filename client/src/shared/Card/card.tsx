
import { observer } from 'mobx-react'
import styled from 'styled-components'




interface ICardProps {
  children: any
  title: string
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
    background-color: ${({theme}) => theme.colors.card}
    

`
const CardContainer = styled.div``

const Card = observer(({children, title}: ICardProps) => {
    return (
        <CardContainer>   
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