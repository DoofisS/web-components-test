import "@carbon/web-components/es/components/button/button";

export default {
  title: "Custom Web Component ",
};

export const Default = () => <bx-btn size="sm">Button</bx-btn>;

export const Primary = () => (
  <bx-btn size="sm" kind={"primary"}>
    Button
  </bx-btn>
);

export const Secondary = () => (
  <bx-btn size="sm" kind={"secondary"}>
    Button
  </bx-btn>
);
