import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BreadCrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
      <Breadcrumb separator="•">
        <Breadcrumb.Item key="home">
          <Link to="/" style={{fontWeight:"600",color:"#000"}}>Dashboard</Link>
        </Breadcrumb.Item>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <Breadcrumb.Item key={name}>
              {isLast ? (
                <span>{name}</span>
              ) : (
                <Link to={routeTo}>{name}</Link>
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
