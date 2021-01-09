$(function() {

	(function quantityProducts() {
		var $quantityArrowMinus = $(".bascet__minus");
		var $quantityArrowPlus = $(".bascet__plus");
		var $quantityNum = $(".bascet__number");

		$quantityArrowMinus.click(quantityMinus);
		$quantityArrowPlus.click(quantityPlus);

		function quantityMinus() {
			if ($quantityNum.val() > 1) {
				$quantityNum.val(+$quantityNum.val() - 1);
			}
		}

		function quantityPlus() {
			$quantityNum.val(+$quantityNum.val() + 1);
		}
	})();

});