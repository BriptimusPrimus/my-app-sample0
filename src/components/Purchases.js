
function Purchases({ data }) {
    return (
        <>
            <table>
                <caption>Purchases</caption>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Purchase Date</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((datum) => {
                        return (
                            <tr>
                                <td>{datum.name}</td>
                                <td>{datum.location}</td>
                                <td>{datum.purchaseDate}</td>
                                <td>{datum.category}</td>
                                <td>{datum.description}</td>
                                <td>{datum.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Purchases;