import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Icon from "../Icon/Icon.vue";

describe("Button.vue", () => {
  test("basic button", () => {
    const wrapper = mount(Button, {
      props: {
        type: "primary"
      },
      slots: {
        default: "button"
      }
    });
    console.log(wrapper.html());
    // class 是否存在
    expect(wrapper.classes()).toContain("lk-button--primary");
    // slot
    // get, find
    expect(wrapper.get("button").text()).toBe("button");
    // 事件
    wrapper.get("button").trigger("click");
    console.log(wrapper.emitted());
    expect(wrapper.emitted()).toHaveProperty("click");
  });
  test("basic button", () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: "disabled"
      }
    });
    // 属性
    expect(wrapper.attributes("disabled")).toBeDefined();
    expect(wrapper.find("button").element.disabled).toBeDefined();
    // 事件
    wrapper.get("button").trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("click");
  });
  test("icon", () => {
    const wrapper = mount(Button, {
      props: {
        icon: "arrow-up"
      },
      slots: {
        default: "icon"
      },
      global: {
        stubs: ["FontAwesomeIcon"]
      }
    });
    console.log(wrapper.html());
    const iconElement = wrapper.findComponent(FontAwesomeIcon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe("arrow-up");
  });
  test("loading", () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: "loading"
      },
      global: {
        stubs: ["Icon"]
      }
    });
    console.log(wrapper.html());
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe("spinner");
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
});
