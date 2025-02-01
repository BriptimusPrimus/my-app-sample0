
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
                                <td className="purchases__cell--bold">{datum.name}</td>
                                <td>
                                    <img
                                        className="purchases__locationimg"
                                        alt={datum.name}
                                        src={datum.location}
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </td>
                                <td>
                                    {
                                        new Date(datum.purchaseDate)
                                            .toLocaleDateString('en-US', {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })
                                    }
                                </td>
                                <td>
                                    <CategoryCell category={datum.category} />
                                </td>
                                <td>{datum.description}</td>
                                <td className="purchases__cell--bold">{datum.price}</td>
                                <td>{'...'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

// Apparel
// Automotive
// Entertainment
// Food
// Footwear
// Technology
// Travel
function CategoryCell({ category }) {
    const classNames = [
        'purchases_category',
        {
            'apparel': true,
            'automotive': true,
            'entertainment': true,
            'food': true,
            'footwear': true,
            'technology': true,
            'travel': true
        }[category.toLowerCase()] === true ?
            `purchases_category--${category.toLowerCase()}` :
            'purchases_category--unknown'
    ]
        .filter(x => x != null)
        .join(' ');

    return (
        <div className={classNames}>
            <p>{category}</p>
        </div>
    );
};

export default Purchases;