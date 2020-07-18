import React from "react";

import { Form, Modal } from "antd";

import { useEditCatalogItemModalContainer } from "./useEditCatalogItemModalContainer";
import { NameInput } from "./EditModalInputs/NameInput";
import { ActiveInput } from "./EditModalInputs/ActiveInput";
import { OrderInput } from "./EditModalInputs/OrderInput";
import { PriceInput } from "./EditModalInputs/PriceInput";
import { OrderFormsInput } from "./EditModalInputs/OrderFormsInput";
import { ImageUrlInput } from "./EditModalInputs/ImageUrlInput";
import { VideoUrlInput } from "./EditModalInputs/VideoUrlInput";
import { ShortDescriptionInput } from "./EditModalInputs/ShortDescriptionInput";
import { AdditionalDetailsInput } from "./EditModalInputs/AdditionalDetailsInput";
import { FrontDeskFormsInput } from "./EditModalInputs/FrontDeskFormsInput";
import {TagsInput} from "./EditModalInputs/TagsInput";
import {SocialMediaLinksInput} from "./EditModalInputs/SocialMediaLinksInput";

export const EditCatalogItemModal = ({
  initialValues,
  visible,
  onOk,
  onCancel = () => {},
  onValidated,
  onValidationFailed,
}) => {
  const [form] = Form.useForm();
  const { forms, tags } = useEditCatalogItemModalContainer();

  React.useEffect(() => {
    if (initialValues) {
      form.resetFields();
    }
  }, [initialValues]);
  return (
    <Modal
      visible={visible}
      title="Edit Catalog Item"
      okText="Ok"
      cancelText="Cancel"
      onCancel={onCancel}
      width={"90vw"}
      onOk={() => {
        onOk();
        const formFields = { ...form.getFieldsValue() }; //not sure why I am losing multi select values when validating
        form
          .validateFields()
          .then((_values) => {
            onValidated(formFields); //values is missing orderForm values so passing formValues before validation
            form.resetFields();
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
            onValidationFailed(info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="name"
        initialValues={initialValues}
      >
        <NameInput />
        <ActiveInput />
        <OrderInput />
        <PriceInput />
        <TagsInput tags={tags}/>
        <OrderFormsInput forms={forms} />
        <FrontDeskFormsInput forms={forms} />
        <ImageUrlInput />
        <VideoUrlInput />
        <ShortDescriptionInput />
        <AdditionalDetailsInput />
        <SocialMediaLinksInput />
      </Form>
    </Modal>
  );
};
