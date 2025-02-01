import { useEffect, useState } from 'react';
import Purchases from './Purchases';

function PurchasesContainer({ fetchData, pageSize }) {
    const [purchases, setPurchases] = useState([]);
    const [page, setPage] = useState(3);

    useEffect(() => {
        const genGetData = async () => {
            try {
                const res = await fetchData();
                // TODO: remove log
                console.log({
                    res
                });

                if (!res.ok) {
                    // TODO: handle error
                    alert(res.errMsg);
                    return;
                }

                const { data } = res;
                setPurchases(data);
            } catch (err) {
                // TODO: handle error
            }
        };

        genGetData();
    }, []);

    const totalPages =
        Math.floor(purchases.length / pageSize) +
        purchases.length % pageSize === 0 ?
            0 :
            1;

    const startIdx = page * pageSize;
    const endIdx = startIdx + pageSize;
    const pageData = purchases.slice(startIdx, endIdx);

    return (
        <section>
            <Purchases
                data={pageData}
                totalPages={totalPages}
            />
        </section>
    );
}

export default PurchasesContainer;