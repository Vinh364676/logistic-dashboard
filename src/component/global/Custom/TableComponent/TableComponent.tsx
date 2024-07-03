import React, { useState } from "react";
import { Button, Form, Input, Modal, Select, Table } from "antd";
import Pagination from "../../item/Pagination/Pagination";
import "./TableComponent.scss";

type Props = {
  totalPage?: number;
  onChangePage: any;
  columns: any[];
  data: any[];
  handleButton?: (selectedRowKeys: any[]) => void;
};

const TableComponent = ({ onChangePage, totalPage, columns, data, handleButton }: Props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [isModalSelect, setIsModalSelect] = useState(false);
  const [customPageSizeInput, setCustomPageSizeInput] = useState("");
  const [params, setParams] = useState({
    pageSize: 10,
    pageIndex: 1,
  });

  const showModalSelect = () => {
    setIsModalSelect(true);
  };

  const handleSelectChange = (value: any) => {
    if (value === "openModal") {
      showModalSelect();
    } else {
      setParams({
        ...params,
        pageSize: value,
      });
      onChangePage(params.pageIndex, value);
    }
  };

  const onSelectChange = (newSelectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handlePageChange = (pageIndex: any, pageSize: any) => {
    setParams({
      ...params,
      pageIndex,
    });
    onChangePage(pageIndex, params.pageSize);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleCustomPageSizeInputChange = (e: any) => {
    const { value } = e.target;
    setCustomPageSizeInput(value);
  };

  const handleOkSelect = () => {
    if (customPageSizeInput === "") {
      return;
    }
    const newPageSize = parseInt(customPageSizeInput);
    if (!isNaN(newPageSize)) {
      let updatedPageSize = newPageSize;

      if (typeof totalPage !== "undefined" && newPageSize > totalPage) {
        updatedPageSize = totalPage;
      }

      setParams({
        ...params,
        pageSize: updatedPageSize,
      });

      onChangePage(params.pageIndex, updatedPageSize);
    }
    setIsModalSelect(false);
  };

  const handleCancelSelect = () => {
    setIsModalSelect(false);
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="tableComponent">
      {hasSelected ? (
       <Button onClick={() => handleButton && handleButton(selectedRowKeys)} type="primary" style={{ marginBottom: 12 }}>
       Contact mail
     </Button>
      ) : null}

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <div className="table__footer">
        <div className="table__footer__col">
          <p className="table__footer__col__title">Số hàng mỗi trang</p>
          <Select
            className="table__footer__select"
            style={{ width: 58 }}
            value={params.pageSize}
            onChange={handleSelectChange}
            bordered={false}
            suffixIcon={null}
          >
            <Select.Option value={5}>5</Select.Option>
            <Select.Option value={10}>10</Select.Option>
            <Select.Option value={15}>15</Select.Option>
            <Select.Option value={20}>20</Select.Option>
            <Select.Option value="openModal">Nhập</Select.Option>
          </Select>
        </div>

        <Pagination
          current={params.pageIndex}
          total={totalPage}
          pageSize={params.pageSize}
          onChange={handlePageChange}
        />
      </div>
      <Modal
        centered
        open={isModalSelect}
        onOk={handleOkSelect}
        onCancel={handleCancelSelect}
        className="modal__product modal__selectPagination"
        okType={"danger"}
      >
        <Form
          name="basic"
          requiredMark={"optional"}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Số item trên trang"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số!",
              },
              {
                validator: (_, value) => {
                  const numberValue = parseInt(value, 10);
                  if (isNaN(numberValue) || numberValue <= 0) {
                    return Promise.reject("Vui lòng nhập số lớn hơn 0");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              className="modal__selectPagination__input"
              placeholder="Số item"
              value={customPageSizeInput}
              onChange={handleCustomPageSizeInputChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TableComponent;
