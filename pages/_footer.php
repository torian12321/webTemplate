<?php
	$requireConfig = isset($requireConfig) ?
		$requireConfig :
		$GLOBALS['jsDir'] . 'require-config.js';
?>

	<script
		src      ="<?php echo $GLOBALS['jsDir']; ?>lib/require-2.2.0.js"
		data-main="<?php echo $requireConfig; ?>">
	</script>

	</body>
</html>


<?php
	//if open/close, do the samen at _header.php
	//cache_close();
?>