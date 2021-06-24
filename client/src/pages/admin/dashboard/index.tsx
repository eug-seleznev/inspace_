import Card from "../../../shared/Card/card"
import { Text } from "../../../shared/Text/text"
import styled from 'styled-components'


const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 40px;
    column-gap: 30px;
    grid-template-areas:
    '. a a b .'
    '. c d d .'
    '. e e e .'
    '. f g h .';
`



const Dashboard = () => {
    return (
        <Grid>
            <Card title="new" gridArea='a'>
                <Text> hello a</Text>
            </Card>
            <Card title="new" gridArea='b'>
                <Text> hello b</Text>
            </Card>
            <Card title="new" gridArea='c'>
                <Text> hello c</Text>
            </Card>
            <Card title="new" gridArea='d'>
                <Text> hello d</Text>
            </Card>
            <Card title="new" gridArea='e'>
                <Text> hello e</Text>
            </Card>
            <Card title="new" gridArea='f'>
                <Text> hello f</Text>
            </Card>
            <Card title="new" gridArea='g'>
                <Text> hello g</Text>
            </Card>
            <Card title="new" gridArea='h'>
                <Text> hello h</Text>
            </Card>
        </Grid>
    )
}



export default Dashboard