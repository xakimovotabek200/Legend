import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import styles from "./Table.module.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Page</th>
            <th className={styles.expand}>Description</th>
            <th>Statuss`</th>
            <th>Actionlar</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                <td>{row.page}</td>
                <td className={styles.expand}>{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td className={styles.fit}>
                  <span className={styles.actions}>
                    <BsFillTrashFill
                      className={styles.delete_btn}
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className={styles.edit_btn}
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
