import React from 'react'
import {Grid, Col, Nav, Table, NavItem,Pagination, Row} from "react-bootstrap";

export const TableTr = (props) => (
                    <tr>
                      <td>{props.index}</td>
                      <td>{props.created_at}</td>
                      <td>{props.text}</td>
                      <td>{props.sentiment} </td>
                      <td>{props.language} </td>
                      </tr>
)

