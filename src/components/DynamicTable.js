function DynamicTable({
    tableTitle,
    columns,
    data
}) {

    return (
        <table className="purchases">
            <caption className="purchases__title">{tableTitle}</caption>
            <colgroup>
                {columns.map(({ id, sizePct }) => {
                    return (
                        <col key={id} style={{ width: `${sizePct}%` }} />
                    )
                })}
            </colgroup>
            <thead>
                <tr>
                    {columns.map(({ id, title }) => {
                        return (
                            <th 
                                key={id}
                                scope="col"
                                className="purchases__headcell"
                            >
                                {title}
                            </th>
                        );
                    })}                    
                </tr>
            </thead>
            <tbody>
                {data.map((datum, idx) => {
                    return (
                        <tr key={idx} className="purchases__row">
                            {columns.map(({ id, renderItem }) => {
                                return (
                                    <td key={id} className="purchases__cell">
                                        {renderItem(datum)}
                                    </td>                                    
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

}

export default DynamicTable;