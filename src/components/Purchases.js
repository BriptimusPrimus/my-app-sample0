
function Purchases({ data, totalPages }) {
    return (
        <>
            <table className="purchases">
                <caption className="purchases__title">Purchases</caption>
                <colgroup>
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '14%' }} />
                    <col style={{ width: '14%' }} />
                    <col style={{ width: '16%' }} />
                    <col style={{ width: '23%' }} />
                    <col style={{ width: '9%' }} />
                    <col style={{ width: '9%' }} />
                </colgroup>
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
                            <tr key={idx} className="purchases__row">
                                <td className="purchases__cell">
                                    <p className="purchases__content purchases__content--bold purchases__content--capitalize">
                                        {datum.name}
                                    </p>
                                </td>
                                <td className="purchases__cell">
                                    <img
                                        className="purchases__content purchases__locationimg"
                                        alt={datum.name}
                                        src={datum.location}
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </td>
                                <td className="purchases__cell">
                                    <label className="purchases__cell__label">
                                        Purchase Date
                                    </label>
                                    <p className="purchases__content">
                                        {
                                            new Date(datum.purchaseDate)
                                                .toLocaleDateString('en-US', {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })
                                        }
                                    </p>
                                </td>
                                <td className="purchases__cell">
                                    <CategoryCell category={datum.category} />
                                </td>
                                <td className="purchases__cell">
                                    {/* Insert dangerous HTML only if you trust the source of data */}
                                    {/* Use DOMPurify or some other third party lib. Out of scope */}
                                    {/* <p dangerouslySetInnerHTML={{
                                        __html: datum.description
                                    }}></p> */}
                                    <p className="purchases__content">
                                        {datum.description}
                                    </p>
                                </td>
                                <td className="purchases__cell">
                                    <p className="purchases__content purchases__content--bold">
                                        {`$${(datum.price / 100).toFixed(2)}`}
                                    </p>
                                </td>
                                <td className="purchases__cell">
                                    <RowOptions />
                                </td>
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
            <p className="purchases__content">{category}</p>
        </div>
    );
};

function RowOptions() {
    return (
        <button
            className="purchases__content purchases__options"
            aria-label="options"
        >
            <span />
            <span />
            <span />
        </button>
    );
};

export default Purchases;