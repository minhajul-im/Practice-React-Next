export const CustomElementRenderer = ({ obj, onChangeFunc }) => {
  switch (obj.component) {
    case "label":
      return <label>{obj.label}</label>;
    case "input":
      return (
        <div>
          <label>{obj.label}</label>
          <input
            name={obj.name}
            type={obj.type}
            defaultValue={obj.defaultValue}
            value={null}
            onChange={(e) => onChangeFunc(obj.name, e.target.value)}
          />
        </div>
      );
    case "textArea":
      return (
        <div>
          <label>{obj.label}</label>
          <textarea
            disabled={obj.disabled}
            cols={obj.cols}
            rows={obj.rows}
            name={obj.name}
            className={obj.className}
            defaultValue={obj.defaultValue}
            placeholder={obj.placeholder}
            onChange={(e) => onChangeFunc(obj.name, e.target.value)}
          />
        </div>
      );
    case "submit":
      return (
        <input
          type={"submit"}
          value={obj.buttonValue}
          className={`${obj.className}`}
          disabled={obj.disabled}
          style={obj.style}
        />
      );
    case "dropdown":
      return (
        <div>
          <label>{obj.label}</label>
          <select
            className={`${obj.className}`}
            value={obj.value}
            onChange={(e) => onChangeFunc(obj.name, e.target.value)}
          >
            {(obj.options || []).map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      );
    case "radio":
      return (
        <div>
          <label>{obj.label}</label>
          <input
            name={obj.name}
            type={"radio"}
            onChange={(e) => onChangeFunc(obj.name, e.target.value)}
            checked={this.props.checked}
          >
            {obj.label}
          </input>
        </div>
      );
    case "image":
      return (
        <div>
          <img alt={obj.alt} src={obj.src} target={obj.target} />
          <label>{obj.label}</label>
        </div>
      );
    case "hyperlink":
      return (
        <a href={obj.href} target={obj.target}>
          {obj.label}
        </a>
      );
    default:
      return <span>Component not found.</span>;
  }
};

export const UserLoginFormConfig = [
  {
    name: "name",
    type: "text",
    className: "width-100",
    component: "input",
    label: "Name",
    required: true,
    defaultValue: "Rajat Singh",
    value: "",
    placeholder: "Write your full name...",
  },
  {
    name: "password",
    type: "password",
    className: "width-100",
    component: "input",
    label: "Password",
    required: true,
    defaultValue: "",
    value: "",
    placeholder: "Write your password....",
  },
  {
    name: "email",
    type: "email",
    className: "width-100",
    component: "input",
    label: "Email",
    required: true,
    defaultValue: "",
    value: "",
    placeholder: "Write your email...",
  },
  {
    name: "gender",
    type: "dropdown",
    className: "width-100",
    component: "dropdown",
    label: "Gender",
    required: true,
    defaultValue: "male",
    options: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ],
    placeholder: null,
  },
  {
    name: "submit",
    type: "submit",
    component: "submit",
    buttonValue: "Submit",
    className: "green-btn",
    disabled: false,
  },
];
