import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

describe("Collapse.vue", () => {
  test("basic collapse", async () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={["a"]}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
          <CollapseItem name="c" title="title c" disabled>
            content c
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ["Icon"]
        }
      }
    );
    const headers = wrapper.findAll(".lk-collapse-item__header");
    const contents = wrapper.findAll(".lk-collapse-item__wrapper");
    // 长度
    expect(headers.length).toBe(3);
    expect(contents.length).toBe(3);
  });
});
