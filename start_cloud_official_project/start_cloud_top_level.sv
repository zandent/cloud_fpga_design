module start_cloud_top_level(	
    input		CLOCK_50,
    output      [6:0]  HEX0,
    output      [6:0]  HEX1,
	output      [6:0]  HEX2,
	output      [6:0]  HEX3,
	output      [6:0]  HEX4,
	output      [6:0]  HEX5,
	inout		hps_io_0_hps_io_sdio_inst_CMD,
	inout		hps_io_0_hps_io_sdio_inst_D0,
	inout		hps_io_0_hps_io_sdio_inst_D1,
	output		hps_io_0_hps_io_sdio_inst_CLK,
	inout		hps_io_0_hps_io_sdio_inst_D2,
	inout		hps_io_0_hps_io_sdio_inst_D3,
	input		hps_io_0_hps_io_uart0_inst_RX,
	output		hps_io_0_hps_io_uart0_inst_TX,
	//input	[3:0]	KEY,
	output	[9:0]	LEDR,
	output	[12:0]	memory_mem_a,
	output	[2:0]	memory_mem_ba,
	output		memory_mem_ck,
	output		memory_mem_ck_n,
	output		memory_mem_cke,
	output		memory_mem_cs_n,
	output		memory_mem_ras_n,
	output		memory_mem_cas_n,
	output		memory_mem_we_n,
	output		memory_mem_reset_n,
	inout	[7:0]	memory_mem_dq,
	inout		memory_mem_dqs,
	inout		memory_mem_dqs_n,
	output		memory_mem_odt,
	output		memory_mem_dm,
	input		memory_oct_rzqin
	//input	[9:0]	SW
    );

	wire [9:0] SW;
	wire [3:0] KEY;

	start_cloud_hps_system u0 (
		.clk_clk            (CLOCK_50          ),//    clk.clk
		.hex0_2_export      ({HEX2,HEX1,HEX0}  ),// hex0_2.export
		.hex3_5_export      ({HEX5,HEX4,HEX3}  ),// hex3_5.export
		.hps_io_0_hps_io_sdio_inst_CMD(	hps_io_0_hps_io_sdio_inst_CMD	),
		.hps_io_0_hps_io_sdio_inst_D0(	hps_io_0_hps_io_sdio_inst_D0	),
		.hps_io_0_hps_io_sdio_inst_D1(	hps_io_0_hps_io_sdio_inst_D1	),
		.hps_io_0_hps_io_sdio_inst_CLK(	hps_io_0_hps_io_sdio_inst_CLK	),
		.hps_io_0_hps_io_sdio_inst_D2(	hps_io_0_hps_io_sdio_inst_D2	),
		.hps_io_0_hps_io_sdio_inst_D3(	hps_io_0_hps_io_sdio_inst_D3	),
		.hps_io_0_hps_io_uart0_inst_RX(hps_io_0_hps_io_uart0_inst_RX),
		.hps_io_0_hps_io_uart0_inst_TX(hps_io_0_hps_io_uart0_inst_TX),
		.key_export         (KEY               ),//    key.export
		.ledr_export        (LEDR              ),//   ledr.export
		.memory_mem_a       (memory_mem_a      ),// memory.mem_a
		.memory_mem_ba      (memory_mem_ba     ),//       .mem_ba
		.memory_mem_ck      (memory_mem_ck     ),//       .mem_ck
		.memory_mem_ck_n    (memory_mem_ck_n   ),//       .mem_ck_n
		.memory_mem_cke     (memory_mem_cke    ),//       .mem_cke
		.memory_mem_cs_n    (memory_mem_cs_n   ),//       .mem_cs_n
		.memory_mem_ras_n   (memory_mem_ras_n  ),//       .mem_ras_n
		.memory_mem_cas_n   (memory_mem_cas_n  ),//       .mem_cas_n
		.memory_mem_we_n    (memory_mem_we_n   ),//       .mem_we_n
		.memory_mem_reset_n (memory_mem_reset_n),//       .mem_reset_n
		.memory_mem_dq      (memory_mem_dq     ),//       .mem_dq
		.memory_mem_dqs     (memory_mem_dqs    ),//       .mem_dqs
		.memory_mem_dqs_n   (memory_mem_dqs_n  ),//       .mem_dqs_n
		.memory_mem_odt     (memory_mem_odt    ),//       .mem_odt
		.memory_mem_dm      (memory_mem_dm     ),//       .mem_dm
		.memory_oct_rzqin   (memory_oct_rzqin  ),//       .oct_rzqin
		.reset_reset_n      (1'b1              ),//  reset.reset_n
		.sw_export          (SW                )//     sw.export
	);

	fpga_portion u_fpga_portion(
		.CLOCK_50(CLOCK_50),
		.KEY  	 (KEY  ),
		.SW   	 (SW   ),
		.LEDR 	 (LEDR ),
		.HEX0 	 (HEX0 ),
		.HEX1 	 (HEX1 ),
		.HEX2 	 (HEX2 ),
		.HEX3 	 (HEX3 ),
		.HEX4 	 (HEX4 ),
		.HEX5 	 (HEX5 )
	);

	
endmodule
