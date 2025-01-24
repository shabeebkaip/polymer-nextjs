'use client';
import React from 'react';
import MetricsSection from './MetricSection';
import EarningsGraph from './EarningGrapgh';
import ProductList from '@/app/product-list/component/ProductList';
import ProductListTable from './ProductListTable';



const SellerDashboard = () => (
    <div className="px-6 space-y-6 md:px-20">
        <div className="grid grid-cols-10 gap-4 ">
            <div className="col-span-7 ">
                <EarningsGraph />
            </div>
            <div className="col-span-3 ">
                <MetricsSection />
            </div>
        </div>
        <ProductListTable />
    </div>
);

export default SellerDashboard;
