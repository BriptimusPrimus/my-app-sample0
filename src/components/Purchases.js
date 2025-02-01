
function Purchases({ data }) {
    return (
        <>
            <table className="purchases">
                <caption className="purchases__title">Purchases</caption>
                <thead>
                    <tr>
                        <th scope="col" className="purchases__headcell">Name</th>
                        <th scope="col" className="purchases__headcell">Location</th>
                        <th scope="col" className="purchases__headcell">Purchase Date</th>
                        <th scope="col" className="purchases__headcell">Category</th>
                        <th scope="col" className="purchases__headcell">Description</th>
                        <th scope="col" className="purchases__headcell">Price</th>
                        <th scope="col" className="purchases__headcell"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((datum, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{datum.name}</td>
                                <td>{datum.location}</td>
                                <td>{datum.purchaseDate}</td>
                                <td>{datum.category}</td>
                                <td>{datum.description}</td>
                                <td>{datum.price}</td>
                                <td>{'...'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Purchases;