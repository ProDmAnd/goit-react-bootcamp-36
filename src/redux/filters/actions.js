// import { actionFabric } from "redux/actions";

import { createAction } from '@reduxjs/toolkit';

// export const filterByStatus = 'filters/changeStatus';

// export const filterTasksByStatus = actionFabric(filterByStatus);

export const changeStatus = createAction('filters/changeStatus');
