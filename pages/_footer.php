
	</body>

<script type="text/javascript">
	var
	project = {
		title : '<?php echo $GLOBALS['projectName']; ?>',
		desc  : '<?php echo $GLOBALS['projectDesc']; ?>'
	},
	colors = {
		main : '<?php echo $GLOBALS['themeColor']; ?>',
		sec  : '<?php echo $GLOBALS['themeColor']; ?>'
	};
</script>


<script
	src      ="<?php echo $GLOBALS['jsDir']; ?>lib/require-2.2.0.js"
	data-main="<?php echo $GLOBALS['jsDir']; ?>require-config.js">
</script>


</html>


<?php
	//if open/close, do the samen at _header.php
	//cache_close();
?>