import '../Styles/App.css';


export interface ColorTheme {
    quiz_button_color: string;
    quiz_button_color_hover: string;
    quiz_button_disabled: string;
  
    progress_bar_color: string;
    progress_bar_background: string;
  
    question_button_color: string;
    question_button_color_hover: string;
    question_button_color_selected: string;
    question_button_text_color: string;
    question_button_text_color_hover: string;
    question_button_text_color_selected: string;

    question_input_background: string;
    question_input_border: string;
    question_input_text: string;
    question_input_text_placeholder: string;
    question_input_border_focus: string;
  
    question_wrapper_background: string;
    question_wrapper_header_text: string;
    question_wrapper_text: string;
  
    question_item_background: string;
    question_item_border: string;
    question_item_text: string;
  
    header_background_color: string;
  
    menu_button_color: string;
    menu_button_color_hover: string;
};
  
export const light_theme: ColorTheme = {
    quiz_button_color: "#0077ff",
    quiz_button_color_hover: "#015281",
    quiz_button_disabled: "#aaaaaa",
  
    progress_bar_color: "#22aa22",
    progress_bar_background: "#e0e0e0",
  
    question_button_color: "#e0e0e0",
    question_button_color_hover: "#003369",
    question_button_color_selected: "#0057b4",
    question_button_text_color: "#161616",
    question_button_text_color_hover: "#ffffff",
    question_button_text_color_selected: "#ebebeb",

    question_input_background: "#ffffff",
    question_input_border: "#ddd",
    question_input_text: "#000000",
    question_input_text_placeholder: "#404040",
    question_input_border_focus: "#007bff",
  
    question_wrapper_background: "#ffffff",
    question_wrapper_header_text: "#333333",
    question_wrapper_text: "#555555",
  
    question_item_background: "#ffffff",
    question_item_border: "#ddd",
    question_item_text: "#333333",
  
    header_background_color: "#18253d",
  
    menu_button_color: "#007bff",
    menu_button_color_hover: "#00356d"
};

export const dark_theme: ColorTheme = {
    quiz_button_color: "#0077ff",
    quiz_button_color_hover: "#015281",
    quiz_button_disabled: "#aaaaaa",
  
    progress_bar_color: "#22aa22",
    progress_bar_background: "#505050",
  
    question_button_color: "#007bff",
    question_button_color_hover: "#0057b4",
    question_button_color_selected: "#003369",
    question_button_text_color: "#e0e0d0",
    question_button_text_color_hover: "#ebebeb",
    question_button_text_color_selected: "#ffffff",

    question_input_background: "#666666",
    question_input_border: "#ddd",
    question_input_text: "#ffffff",
    question_input_text_placeholder: "#e0e0d0",
    question_input_border_focus: "#007bff",
  
    question_wrapper_background: "#101228",
    question_wrapper_header_text: "#dddddd",
    question_wrapper_text: "#bbbbbb",
  
    question_item_background: "#404040",
    question_item_border: "#606060",
    question_item_text: "#dddddd",
  
    header_background_color: "#060710",
  
    menu_button_color: "#007bff",
    menu_button_color_hover: "#00356d"
}