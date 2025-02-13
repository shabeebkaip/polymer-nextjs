import {
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Table,
} from "@mui/material";
import { FileText, FileWarning } from "lucide-react";
import React from "react";

const DocumentTable = ({ product }) => {
  const data = [
    {
      id: 1,
      name: "Technical Data Sheet",
      icon: <FileText className="w-4 h-4" />,
      url: "https://media.knowde.com/image/upload/v1729178523/STADEX132_PIS_SAG_20231228.pdf20241017-1-uqqif8.pdf?__cld_token__=exp=1739070315~hmac=da80709bb4f21ca1ab7d8a9b5ab9a2f074b8738ad0317dad6dd97c4d17146945&_gl=1*9r8l5z*_gcl_au*OTM3OTM5ODQxLjE3MzU2Nzk4NzU.",
    },
    {
      id: 2,
      name: "Safety Data Sheet",
      icon: <FileWarning className="w-4 h-4" color="red" />,
      url: "https://media.knowde.com/image/upload/v1729178523/STADEX132_SDS_SAG_20231228.PDF20241017-1-ag7bda.pdf?__cld_token__=exp=1739070514~hmac=2fd3392a991c2fc0b30eff7b8a6f5d26d95cacc37034d1b2247a61bca1439976&_gl=1*uqbn7k*_gcl_au*OTM3OTM5ODQxLjE3MzU2Nzk4NzU.",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[18px] font-semibold  w-40 ">Documents</h4>
      <TableContainer
        component={Paper}
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Document</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {item?.icon} Safety Data Sheet
                  </div>
                </TableCell>
                <TableCell>{product?.name} Safety Data Sheet</TableCell>
                <TableCell>
                  <button className="px-2 py-1 duration-300 border rounded-md text-secondary hover:bg-secondary hover:text-white">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DocumentTable;
