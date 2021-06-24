import Card from "../../../shared/Card/card"
import { Text } from "../../../shared/Text/text"
import styled from 'styled-components'


const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(12, 90px);
    row-gap: 40px;
    column-gap: 30px;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    grid-auto-flow: dense;
    overflow: scroll;


    @media (max-width: 1500px){
    grid-template-columns: repeat(12, 80px);

    }
    @media (max-width: 1300px){
        grid-template-columns: repeat(12, 1fr);
        margin-left: 15px;
        margin-right: 15px;
        }
    @media (max-width: 770px){
        grid-template-columns: 1fr;
        margin-left: 15px;
        margin-right: 15px;
        }
`



const Dashboard = () => {
    return (
        <Grid style={{overflow: 'scroll'}}>
            <Card title="new" columns={7}>
                <Text> hello 1</Text>
            </Card>
            <Card title="new" columns={2}>
                <Text> hello 2</Text>
            </Card>
            <Card title="new" columns={3}>
                <Text> hello 3</Text>
            </Card>
            <Card title="new" columns={7}>
                <Text> hello 4</Text>
            </Card>
            <Card title="new" columns={5}>
                <Text> hello 5</Text>
            </Card>
        </Grid>
    )
}



export default Dashboard