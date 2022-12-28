import { actionFabric } from "redux/actions";

export const filterByStatus = 'filters/changeStatus';

export const filterTasksByStatus = actionFabric(filterByStatus);