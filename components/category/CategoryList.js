import React from 'react';
import CategoryCard from './CategoryCard'

function CategoryList(props) {
    const { categories } = props;
    return (
        <>
            {
                categories.data.map((category) => {
                    return <div className="col-md-3 ">
                        <CategoryCard category={category} />
                    </div>
                })
            }
        </>
    );
}

export default CategoryList;