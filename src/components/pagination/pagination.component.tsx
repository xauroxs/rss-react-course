import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { PaginationProps } from './pagination.types';

import './pagination.styles.scss';

const Pagination = (props: PaginationProps) => {
  const { page, handlePage, handleItemsPerPage } = props;

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    handleItemsPerPage(e.target.value);

    searchParams.set('perPage', e.target.value);
    setSearchParams(searchParams);
  };

  const optionValues = ['5', '10', '20', '30', '40', '50'];
  const perPage = searchParams.get('perPage') || '';
  const options = optionValues.map((value) => {
    return (
      <option key={value} value={value}>
        {value}
      </option>
    );
  });
  if (!optionValues.includes(perPage)) {
    options.push(
      <option key={perPage} value={perPage}>
        {perPage}
      </option>
    );
  }

  return (
    <div className="paginationContainer">
      <div
        className="paginationItem"
        onClick={() => handlePage(`${parseInt(page) - 1}`)}
      >
        &lt;
      </div>
      <div className="paginationItem">{searchParams.get('page')}</div>
      <div
        className="paginationItem"
        onClick={() => handlePage(`${parseInt(page) + 1}`)}
      >
        &gt;
      </div>
      <select
        className="paginationItem"
        name="perPage"
        id="perPage"
        onChange={handleSelect}
        value={perPage}
      >
        {options}
      </select>
    </div>
  );
};

export default Pagination;
