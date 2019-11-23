! function(e) {
    function i() { clearTimeout(a), a = setTimeout(r, 50) }

    function r() { var i = e(".mbr-gallery .modal"); if (i.length) { var r = e(window).width(),
                a = e(window).height();
            i.each(function() { var i, n;
                e(this).hasClass("in"); var o = e(this).find(".modal-dialog");
                i = o.find(".carousel-item.active > figure > img"), o.find(".carousel-item.prev > figure> img, .carousel-item.next > figure > img").length && (i = o.find(".carousel-item.prev > figure > img, .carousel-item.next > figure > img").eq(0)), n = i[0].naturalWidth; var t = i[0].naturalHeight;
                n = (a - 60 - (i = (i = r / a > n / t ? (a - 60) * n / t : r - 60) >= n ? n : i) * t / n) / 2, o.css({ width: parseInt(i), top: n }) }) } } var a;
    e(document).on("add.cards change.cards", function(i) { void 0 !== e.fn.masonry && e(i.target).outerFind(".mbr-gallery").each(function() { var i = e(this).find(".mbr-gallery-row").masonry({ itemSelector: ".mbr-gallery-item", percentPosition: !0 });
            i.masonry("reloadItems"), i.imagesLoaded().progress(function() { i.masonry("layout") }) }) }), e(window).on("resize load", i), e(window).on("show.bs.modal", i), e(window).on("slid.bs.carousel", i) }(jQuery);