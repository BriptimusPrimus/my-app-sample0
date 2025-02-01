import { useEffect, useState } from 'react';
import Purchases from './Purchases';

function PurchasesContainer({ fetchData, pageSize }) {
    const [purchases, setPurchases] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const genGetData = async () => {
            try {
                const res = await fetchData();

                if (!res.ok) {
                    setError(res.errMsg);
                    return;
                }

                const { data } = res;
                setPurchases(data);
            } catch (err) {
                setError(err.message);
            }
        };

        genGetData();
    }, []);

    const totalPages =
        Math.floor(purchases.length / pageSize) +
            (purchases.length % pageSize === 0 ?
                0 :
                1);

    const nextPageEnabled = ((page + 1) * pageSize) < purchases.length;
    const prevPageEnabled = page > 0;

    const goToPrevPage = () => {
        if (!prevPageEnabled) {
            return;
        }
        setPage(val => val - 1);
    };

    const goToNextPage = () => {
        if (!nextPageEnabled) {
            return;
        }
        setPage(val => val + 1);
    }

    const startIdx = page * pageSize;
    const endIdx = startIdx + pageSize;
    const pageData = purchases.slice(startIdx, endIdx);

    return (
        <section>
            {
                error != null ? (
                    <p className="global_error">
                        <strong>Error:</strong> {error}. Try again later.
                    </p>
                ) : null
            }            
            <Purchases
                data={pageData}
                page={page}
                totalPages={totalPages}
                goToPrevPage={goToPrevPage}
                goToNextPage={goToNextPage}
                prevPageEnabled={prevPageEnabled}
                nextPageEnabled={nextPageEnabled}
            />
        </section>
    );
}

export default PurchasesContainer;