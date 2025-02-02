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

export default CategoryCell;