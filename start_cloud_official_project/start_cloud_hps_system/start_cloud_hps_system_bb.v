
module start_cloud_hps_system (
	clk_clk,
	hex0_2_export,
	hex3_5_export,
	hps_io_0_hps_io_sdio_inst_CMD,
	hps_io_0_hps_io_sdio_inst_D0,
	hps_io_0_hps_io_sdio_inst_D1,
	hps_io_0_hps_io_sdio_inst_CLK,
	hps_io_0_hps_io_sdio_inst_D2,
	hps_io_0_hps_io_sdio_inst_D3,
	hps_io_0_hps_io_uart0_inst_RX,
	hps_io_0_hps_io_uart0_inst_TX,
	key_export,
	ledr_export,
	memory_mem_a,
	memory_mem_ba,
	memory_mem_ck,
	memory_mem_ck_n,
	memory_mem_cke,
	memory_mem_cs_n,
	memory_mem_ras_n,
	memory_mem_cas_n,
	memory_mem_we_n,
	memory_mem_reset_n,
	memory_mem_dq,
	memory_mem_dqs,
	memory_mem_dqs_n,
	memory_mem_odt,
	memory_mem_dm,
	memory_oct_rzqin,
	reset_reset_n,
	sw_export);	

	input		clk_clk;
	input	[20:0]	hex0_2_export;
	input	[20:0]	hex3_5_export;
	inout		hps_io_0_hps_io_sdio_inst_CMD;
	inout		hps_io_0_hps_io_sdio_inst_D0;
	inout		hps_io_0_hps_io_sdio_inst_D1;
	output		hps_io_0_hps_io_sdio_inst_CLK;
	inout		hps_io_0_hps_io_sdio_inst_D2;
	inout		hps_io_0_hps_io_sdio_inst_D3;
	input		hps_io_0_hps_io_uart0_inst_RX;
	output		hps_io_0_hps_io_uart0_inst_TX;
	output	[3:0]	key_export;
	input	[9:0]	ledr_export;
	output	[12:0]	memory_mem_a;
	output	[2:0]	memory_mem_ba;
	output		memory_mem_ck;
	output		memory_mem_ck_n;
	output		memory_mem_cke;
	output		memory_mem_cs_n;
	output		memory_mem_ras_n;
	output		memory_mem_cas_n;
	output		memory_mem_we_n;
	output		memory_mem_reset_n;
	inout	[7:0]	memory_mem_dq;
	inout		memory_mem_dqs;
	inout		memory_mem_dqs_n;
	output		memory_mem_odt;
	output		memory_mem_dm;
	input		memory_oct_rzqin;
	input		reset_reset_n;
	output	[9:0]	sw_export;
endmodule
