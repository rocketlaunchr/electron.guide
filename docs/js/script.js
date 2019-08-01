$(document).ready(function() {
  $(".doc-sidebar-list__item__children-toggle--show").click(function(e) {
    e.preventDefault();
    $(this).attr("href", "javascript:void(0)");
    $(this).toggleClass(
      "doc-sidebar-list__item__children-toggle doc-sidebar-list__item__children-toggle--hide"
    );
    $(this).toggleClass(
      "doc-sidebar-list__item__children-toggle doc-sidebar-list__item__children-toggle--show"
    );

    $(this)
      .parent("li")
      .toggleClass(
        "doc-sidebar-list__item doc-sidebar-list__item--link doc-sidebar-list__item--current doc-sidebar-list__item--has-children"
      );
    $(this)
      .parent("li")
      .toggleClass(
        "doc-sidebar-list__item doc-sidebar-list__item--link doc-sidebar-list__item--has-children doc-sidebar-list__item--children-list--hidden"
      );

    $(this.nextElementSibling).toggleClass("doc-sidebar-list__children-list");
    $(this.nextElementSibling).toggleClass(
      "doc-sidebar-list__children-list doc-sidebar-list__children-list--hidden"
    );
    console.log("anchor open");
  });

  $("a span:contains(<strong>)").each(function() {
    $(this).html($(this).text());
  });
});
