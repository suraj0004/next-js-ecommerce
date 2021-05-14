import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

function CategoryCard(props) {

    const router = useRouter()
    const { shop_slug } = router.query;
    const { category } = props;

    return (
        <Link href={`${shop_slug}/${category.id}`}>
            <div className="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
                <img
                    src={category.image}
                    className="card-img-top"
                    height={250}
                    width={250}
                />
                <div className="card-img-overlay">
                    <h5 className="card-title ">{category.name}</h5>
                </div>
            </div>
        </Link>
    );
}

export default CategoryCard;