import DynamicTable from "./DynamicTable";
import CategoryCell from './CategoryCell';
import RowOptions from "./RowOptions";

function Purchases({
    data,
    page,
    totalPages,
    goToPrevPage,
    goToNextPage,
    prevPageEnabled,
    nextPageEnabled
}) {
    if (data.length === 0) {
        return (
            <p className="empty_table_msg">No data available.</p>
        );
    }

    const cols = [
        {
            id: 'name',
            title: 'Name',
            sizePct: 15,
            renderItem: (datum) => {
                return (
                    <p className="purchases__content purchases__content--bold purchases__content--capitalize">
                        {datum.name}
                    </p>
                );
            }
        },
        {
            id: 'location',
            title: 'Location',
            sizePct: 14,
            renderItem: (datum) => {
                return (
                    <img
                        className="purchases__content purchases__locationimg"
                        alt={datum.name}
                        src={datum.location}
                        onError={(e) => e.target.style.display = 'none'}
                    />
                );
            }
        },
        {
            id: 'date',
            title: 'Purchase Date',
            sizePct: 14,
            renderItem: (datum) => {
                return (
                    <>
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
                    </>
                )
            }
        },
        {
            id: 'category',
            title: 'Category',
            sizePct: 16,
            renderItem: (datum) => {
                return (
                    <CategoryCell category={datum.category} />
                );
            }
        },
        {
            id: 'description',
            title: 'Description',
            sizePct: 23,
            renderItem: (datum) => {
                // Insert dangerous HTML only if you trust the source of data
                // Use DOMPurify or some other third party lib. Out of scope
                // <p dangerouslySetInnerHTML={{
                //     __html: datum.description
                // }}></p> 
                return (
                    <p className="purchases__content">
                        {datum.description}
                    </p>
                );
            }
        },
        {
            id: 'price',
            title: 'Price',
            sizePct: 9,
            renderItem: (datum) => {
                return (
                    <p className="purchases__content purchases__content--bold">
                        {`$${(datum.price / 100).toFixed(2)}`}
                    </p>
                );
            }
        },
        {
            id: 'options',
            title: '',
            sizePct: 9,
            renderItem: (datum) => {
                return (
                    <RowOptions />
                );
            }
        },
    ];


    return (
        <>
            <DynamicTable
                tableTitle="Purchases"
                columns={cols}
                data={data}
            />
            <section className="controls">
                <button
                    disabled={!prevPageEnabled}
                    className="controls__btn controls__btn__prev"
                    onClick={goToPrevPage}
                >
                    {' < '}
                </button>
                <p className="controls__pageinfo">
                    Page {page + 1} of {totalPages}
                </p>
                <button
                    disabled={!nextPageEnabled}
                    className="controls__btn controls__btn__next"
                    onClick={goToNextPage}
                >
                    {' > '}
                </button>
            </section>
        </>
    );
};

export default Purchases;