import ListItemText from '@mui/material/ListItemText';
import { useGetReportListQuery } from '../../services/report'

const ListItemReportText = () => {
    let isLoggedIn = '';
    const { data } = useGetReportListQuery('')

    data?.content.map((value: any) => {
        isLoggedIn = value.id
    })

    return (
        <div>
            {isLoggedIn ? (
                <ListItemText
                    primary={data?.content[0].name + ' ' + data?.content[0].description}
                />
            ) : (
                <ListItemText
                    primary="other name"
                />
            )}
        </div>
    )
}

export default ListItemReportText